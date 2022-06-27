import { CheckCircle, Lock } from "phosphor-react";
import {isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from "react-router-dom";
interface LessonProps{
    title:string;
    slug:string;
    date:Date;
    type: 'live' | 'class';
}


export function Leasson(props: LessonProps) {
const estadoconteudo = isPast(props.date);
const formatdate = format(props.date, "EEEE' - 'd' de 'MMMM' - 'k'h'mm'",{
    locale:ptBR
})
  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-neutral-700">{formatdate}</span>

      <div className=" rounded border border-neutral-700 p-4 mt-2 group-hover:border-green-400">
        <header className="flex items-center justify-between">
          {estadoconteudo ? (  
          <span className="text-sm text-blue-500 font-medium flex items-center gap-2"> 
          <CheckCircle size={20}/>
            Conteudo Liberado
        </span>) : (
              <span className="text-sm text-orange-500 font-medium flex items-center gap-2"> 
              <Lock size={20}/>
                Em Breve
            </span>
        )}

        
          <span className="text-xs rounded py-[0.125rem] p-2 text-white border border-green-300 font-bold">
            {props.type == 'live' ? 'AO VIVO' : 'AULA PRÀTICA'}
        </span>
        </header>

        <strong className="text-neutral-200 mt-5 block">
            {props.title}
        
        </strong>
      </div>
    </Link>
  );
}
