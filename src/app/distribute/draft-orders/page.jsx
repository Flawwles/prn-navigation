import Link from "next/link";

export default function OrderDraftsPage() {
    return (
      <div className="flex flex-1 flex-col gap-4 p-8">
        <h1 className="text-2xl font-bold">Order Drafts</h1>
        <div className="flex-1 rounded-xl bg-muted/50 p-4">

          Order drafts goes here

          <div className="pt-6">
           <div className="bg-blue-50 p-5">Still working on the content? Checkout <Link href="/create/drafts" className="text-blue-700 underline">content drafts</Link>? </div>
          </div>



        </div>
      </div>
    )
  } 