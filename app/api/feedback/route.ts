import { NextResponse } from "next/server";
import Feedback from "@/lib/models/feedbackSchema";
import dbConnect from "@/lib/database";
export const dynamic = 'force-dynamic'; 
export const POST = async (request: Request) => {
  try {
    await dbConnect();

    const body = await request.json();
    const { feedback_title, feedback_discription } = body;
    if (!feedback_title || !feedback_discription) {
      return NextResponse.json(
        { message: "Please give the correct feedback" },
        { status: 400 }
      );
    }

    const response = await Feedback.create({
        feedback_title,
        feedback_discription
    });
    return NextResponse.json(
      { message: "Thanks for your Feedback", feed: response },
      { status: 201 }
    );

  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to send feedback", error: error.message },
      { status: 500 }
    );
  }
};
