import { gql, useQuery } from "@apollo/client";
import { Leasson } from "./Lesson"

const GET_LESSONS_QUERY = gql`
query MyQuery {
  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    id
    lessonType
    availableAt
    title
    slug
  }
}
`

interface GetLessonsQueryResponse{
    lessons:{
        id: string;
        lessonType:  'live' | 'class';
        availableAt:string;
        title:string;
        slug:string;
    }[]
}


export function Sidebar() {
    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

  return (
    <aside className="w-[348px] bg-neutral-800 p-6 border-l border-neutral-700">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-neutral-700 block ">
        Conograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson=>{
            return (
                <Leasson
                key={lesson.id} 
                title={lesson.title}
                slug={lesson.slug}
                date={new Date(lesson.availableAt)}
                type={lesson.lessonType}
       
                />
            )
        })}

      </div>
    </aside>
  );
}
