import { Badge } from "@/components";
import { Calendar, Layers, MapPin } from "lucide-react";
import React from "react";
import { format } from "date-fns";
import Image from "next/image";
import { isEmpty, isNotNil } from "ramda";

type Props = {
  features: any;
};

export default async function Featured({ features }: Props) {
  return (
    <>
      <h3 className='mb-6'>{features[0].title_section}</h3>
      <div className=' gap-4 flex flex-col h-auto md:max-h-72 overflow-auto pr-4'>
        {features.map((item: any, i: number) => {
          return <Project key={i} item={item} />;
        })}
      </div>
    </>
  );
}

type TProject = {
  item: any;
};

const Project = ({ item }: TProject) => {
  const { name, description, start_date, end_date, location, tags, icon } =
    item;
  const formatDate = (date: string) =>
    date && format(new Date(date), "MMM yyyy");
  const isNotNilOrEmpty = (x: any) => isNotNil(x) && !isEmpty(x);
  return (
    <div className='flex flex-col gap-4 rounded-xl bg-light-100 dark:bg-dark-100 p-4'>
      <div className='flex items-start justify-between'>
        <div className='p-2 rounded-xl w-10 h-10 relative '>
          {icon ? (
            <Image
              src={icon.url}
              width={icon.width}
              height={icon.height}
              alt={name}
              className='w-full h-full object-contain rounded-xl'
            />
          ) : (
            <Layers />
          )}
        </div>
        <div className='flex flex-wrap justify-end gap-2 text-xs'>
          <div className='flex items-center gap-2'>
            <Calendar className='w-4 h-4' />
            <div>
              <span>{formatDate(start_date)}</span>
              <span className='mx-1'>|</span>
              <span>
                {isNotNilOrEmpty(end_date) ? formatDate(end_date) : " Present"}
              </span>
            </div>
          </div>
          <div className='flex items-center gap-1'>
            <MapPin className='w-4 h-4' /> <span>{location}</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4 text-xs'>
        <div className='font-bold'>{name}</div>
        <p>{description}</p>
        <div className='flex flex-wrap items-center gap-1'>
          {tags.split(",").map((tag: string, i: number) => (
            <Badge key={i}>{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
