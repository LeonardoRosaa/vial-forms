'use client'

import { useParams } from "next/navigation";
import SucccessContainer from "@/app/shared/components/success_container";

export default function SourceRecordsSuccessPage() {
    const params = useParams<{ id: string }>()
    return <SucccessContainer message="Your reply has been recorded" action="Submit another answer" link={`/sources/records/${params.id}`} />
        
        
}