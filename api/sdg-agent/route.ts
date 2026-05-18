import { NextResponse } from "next/server";
import { processAgentRequest, AgentRequest } from "../../../lib/sdgAgent";

export async function POST(request: Request) {
  try {
    const body = await request.json() as Partial<AgentRequest>;

    if (!body.mode || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields. Please provide 'mode' and 'message'." },
        { status: 400 }
      );
    }

    if (!["education", "wellbeing", "water"].includes(body.mode)) {
      return NextResponse.json(
        { error: "Unknown mode. Please choose Learn, MindCare, or AquaLife.", fallback: true },
        { status: 400 }
      );
    }

    const response = await processAgentRequest(body as AgentRequest);
    return NextResponse.json({ success: true, data: response });

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
