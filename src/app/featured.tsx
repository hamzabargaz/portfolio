import { Badge } from "@/components";
import { Calendar, Layers, MapPin } from "lucide-react";
import React from "react";

type Props = {};

export default function Featured({}: Props) {
  return (
    <>
      <h3 className='mb-6'> Featured Projects</h3>
      <div className=' gap-4 flex flex-col max-h-72 overflow-auto pr-4'>
        {Array.from({ length: 4 }).map((_, i) => (
          <Project
            key={i}
            title={`Project ${i + 1}`}
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
          />
        ))}
      </div>
    </>
  );
}

type TProject = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

const Project = ({ title, description, icon: Icon }: TProject) => {
  return (
    <div className='flex flex-col gap-4 rounded-xl bg-light-100 dark:bg-dark-100 p-4'>
      <div className='flex items-start justify-between'>
        <div className='p-2 rounded-xl bg-light-200 dark:bg-dark-200'>
          {Icon ?? <Layers />}
        </div>
        <div className='flex gap-2 text-xs'>
          <div className='flex items-center gap-2'>
            <Calendar className='w-4 h-4' /> <span>date xxx | date xxx</span>
          </div>
          <div className='flex items-center gap-1'>
            <MapPin className='w-4 h-4' /> <span>Tallinn, Estonia</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div>{title}</div>
        <p>{description}</p>
        <div className='flex items-center gap-4'>
          <Badge>React</Badge>
          <Badge>Next.js</Badge>
          <Badge>Typescript</Badge>
        </div>
      </div>
    </div>
  );
};
