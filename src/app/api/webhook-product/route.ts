import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { StaticDocument, type Product } from "@/gql/graphql";
type RespWebhook =
	| {
			event: "entry.update";
			createdAt: string;
			model: "product";
			uid: string;
			entry: Product;
	  }
	| {
			event: "entry.update";
			createdAt: string;
			model: "static-document";
			uid: string;
			entry: StaticDocument;
	  };

// eslint-disable-next-line no-unused-vars
export async function POST(_request: NextRequest): Promise<Response> {
	const resp: RespWebhook = (await _request.json()) as RespWebhook;
	console.log(resp);
	if (resp.event === "entry.update" && resp.model === "product") {
		revalidatePath("/products");
		revalidatePath(`/product/${resp.entry.slug}`);
	}
	if (resp.event === "entry.update" && resp.model === "static-document") {
		revalidatePath(`/${resp.entry.name}`);
	}
	return NextResponse.json(resp, { status: 200 });
}
