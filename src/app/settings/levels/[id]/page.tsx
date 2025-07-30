"use client";
import { useParams } from "next/navigation";

export default function EditLevelPage() {
  const { id } = useParams();

  return (
    <h1 className="text-2xl font-semibold">Edit Level: {id}</h1>
  );
}
