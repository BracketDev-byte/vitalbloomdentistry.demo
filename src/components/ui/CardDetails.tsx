import { ArrowRight, Calendar } from 'lucide-react';
import { ReactNode } from 'react';

interface CardDetails {
  hasDate: boolean;
  date?: string;
  heading: string;
  description: string;
  hasList: boolean;
  list?: string[];
  cta: string;
  clicked: () => void;
}

export default function CardDetails(props: CardDetails) {
  return (
    <div className="p-6">
      {props.hasDate ? (
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          {props.date}
        </div>
      ) : null}

      <h3
        className={`text-xl font-semibold text-gray-900 mb-3 ${
          props.hasDate ? 'line-clamp-2' : ''
        }`}
      >
        {props.heading}
      </h3>

      <p
        className={`text-gray-600 mb-4 leading-relaxed ${
          props.hasDate ? 'line-clamp-3' : ''
        }`}
      >
        {props.description}
      </p>

      {props.hasList ? (
        <ul className="space-y-2 mb-6">
          {props.list?.map((list, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
              {list}
            </li>
          ))}
        </ul>
      ) : null}

      <button
        onClick={props.clicked}
        className="group/btn border-primary py-1 rounded-lg bg-white text-primary w-full hover:bg-primary hover:text-white"
      >
        {props.cta}
        <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
