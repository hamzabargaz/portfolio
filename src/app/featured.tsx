import { Badge } from "@/components";
import { Calendar, Layers, MapPin } from "lucide-react";
import React from "react";
import { getBlocks, getDatabase, getFeatured } from "../lib/notion";
import { format } from "date-fns";
import Image from "next/image";

type Props = {};

const getFeaturedProjects = async () => {
  const data = await getFeatured();
  const id = data?.map((page: any) => {
    return page.id;
  });
  return id[0];
};

export default async function Featured({}: Props) {
  const pageId: any = await getFeaturedProjects();
  const database = await getBlocks(pageId);
  const projects = await getDatabase(database[0].id);

  if (!pageId || !projects) {
    return <div />;
  }

  return (
    <>
      <h3 className='mb-6'> Featured Projects</h3>
      <div className=' gap-4 flex flex-col max-h-72 overflow-auto pr-4'>
        {projects.map((item: any, i: number) => {
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
  const formatDate = (date: string) =>
    date && format(new Date(date), "MMM yyyy");
  const name = item?.properties?.name?.title[0]?.plain_text;
  const description = item?.properties?.description?.rich_text[0]?.plain_text;
  const start_date = item?.properties?.start_date?.date.start;
  const end_date = item?.properties?.end_date?.date.start;
  const location = item?.properties?.location?.rich_text[0]?.plain_text;
  const list_tags = item?.properties?.tags?.rich_text[0]?.plain_text.split(",");
  const icon = item?.properties?.icon?.files[0]?.file?.url;
  return (
    <div className='flex flex-col gap-4 rounded-xl bg-light-100 dark:bg-dark-100 p-4'>
      <div className='flex items-start justify-between'>
        <div className='p-2 rounded-xl bg-light-200 dark:bg-dark-200'>
          {icon ? (
            <Image src={icon} width={40} height={40} alt='' />
          ) : (
            <Layers />
          )}
        </div>
        <div className='flex flex-wrap justify-end gap-2 text-xs'>
          <div className='flex items-center gap-2'>
            <Calendar className='w-4 h-4' />{" "}
            <span>
              {formatDate(start_date)} | {formatDate(end_date)}
            </span>
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
          {list_tags.map((tag: string, i: number) => (
            <Badge key={i}>{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
