import { dbConnect } from "@/lib/db";
import { Users } from "@/lib/models/users";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const data = await Users.find();
  return NextResponse.json({
    message: "Users get successfully",
    data: data,
  });
}
export async function POST(req, res) {
  await dbConnect();
  const { name, email, password } = await req.json();

  try {
    if (!name) {
      return NextResponse.json(
        { message: "Please enter your name." },
        { status: 400 }
      );
    }
    if (!email) {
      return NextResponse.json(
        { message: "Please enter your email." },
        { status: 400 }
      );
    }
    if (!password) {
      return NextResponse.json(
        { message: "Please enter your password." },
        { status: 400 }
      );
    }

    const exitingUser = await Users.findOne({ email });
    if (exitingUser) {
      return NextResponse.json(
        { message: "User already exist with this email..!" },
        { status: 200 }
      );
    }
    const user = new Users({ name, email, password });
    const validate = user.validateSync();
    if (validate) {
      return NextResponse.json({ error: validate }, { status: 400 });
    }
    await user.save();
    return NextResponse.json(
      { message: "Registered successfully..!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Unspected error occured..!" },
      { status: 500 }
    );
  }
}
export async function PUT(req, res) {
  await dbConnect();
  const { _id, name, email } = await req.json();

  try {
    if (!_id) {
      return NextResponse.json(
        { message: "Please provide user id." },
        { status: 400 }
      );
    }
    if (!name) {
      return NextResponse.json(
        { message: "Please enter your name." },
        { status: 400 }
      );
    }
    if (email) {
      return NextResponse.json(
        { message: "You can't update your email." },
        { status: 400 }
      );
    }

    const user = await Users.findByIdAndUpdate(_id, { name }, { new: true });

    const validate = user.validateSync();
    if (validate) {
      return NextResponse.json({ error: validate }, { status: 400 });
    }
    await user.save();
    return NextResponse.json(
      { message: "User updated successfully..!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Unspected error occured..!" },
      { status: 500 }
    );
  }
}
export async function DELETE(req, res) {
  await dbConnect();
  const { _id } = await req.json();

  try {
    if (!_id) {
      return NextResponse.json(
        { message: "Please provide user id." },
        { status: 400 }
      );
    }

    const user = await Users.findByIdAndDelete(_id);

    if (!user) {
      return NextResponse.json(
        { message: "User not exist with this ID..!" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "User Deleted successfully..!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Unspected error occured..!" },
      { status: 500 }
    );
  }
}
