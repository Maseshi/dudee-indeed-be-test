import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ memberCount: string }> }
) {
  try {
    const { memberCount } = await params;

    if (isNaN(Number(memberCount)))
      return NextResponse.json(
        {
          status: "Invalid Request",
          message: "The member count must be a number.",
        },
        { status: 400 }
      );

    const memberCountInteger = parseInt(memberCount);

    if (memberCountInteger < 1 || memberCountInteger > 100)
      return NextResponse.json(
        {
          status: "Invalid Request",
          message: "The member count must be between 1 and 100.",
        },
        { status: 400 }
      );

    const getFibonacciSequence = (count: number): number[] => {
      const sequence = [];
      let a = 0;
      let b = 1;

      for (let i = 0; i < count; i++) {
        sequence.push(a);
        [a, b] = [b, a + b];
      }

      return sequence;
    };
    const getSequenceTotal = (sequence: number[]): number => {
      let total = 0;

      sequence.forEach((number) => (total += number));

      return total;
    };

    const sequence = getFibonacciSequence(memberCountInteger);
    const total = getSequenceTotal(sequence);

    return NextResponse.json(
      {
        "member-count": memberCountInteger,
        sequence,
        total,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "Error",
        message: "An unexpected error occurred.",
      },
      { status: 500 }
    );
  }
}
