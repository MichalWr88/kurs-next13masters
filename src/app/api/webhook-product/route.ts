import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { type Product } from "@/gql/graphql";
type RespWebhook = {
	event: "entry.update";
	createdAt: string;
	model: "product";
	uid: string;
	entry: Product;
};

// eslint-disable-next-line no-unused-vars
export async function POST(_request: NextRequest): Promise<Response> {
	const resp: RespWebhook = (await _request.json()) as RespWebhook;

	if (resp.event === "entry.update" && resp.model === "product") {
		revalidatePath("/products");
		revalidatePath(`/product/${resp.entry.slug}`);
	}
	return NextResponse.json(resp, { status: 200 });
}
