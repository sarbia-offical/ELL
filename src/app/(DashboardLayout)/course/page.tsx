"use client"
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { firstLesson } from "../../owner/firstLesson"
import { secondLesson } from "../../owner/secondLesson"
import { thirdLesson } from "../../owner/thirdLesson"
import { ILessonInfo } from '@/app/owner/enum';
const Course = () => {
    const searchParams  = useSearchParams();
    const [list, setList] = useState<Array<ILessonInfo>>([
        firstLesson,
        secondLesson,
        thirdLesson,
      ]);
    useEffect(() => {
        const id = searchParams.get('id') || 0;
        console.log('id', id);
        console.log('list', list[+id])
    }, [list, searchParams])
    return (
        <div>Course</div>
    )
}
export default Course;