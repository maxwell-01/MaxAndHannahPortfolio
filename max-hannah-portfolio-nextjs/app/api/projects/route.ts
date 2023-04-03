import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const exampleObject = {
    status: 200,
    body: {
      title: "max",
      states: ["on", "off"],
    },
  };

  return NextResponse.json(exampleObject);

  // return new Response("hello", {
  //   status: 200,
  // });
}
