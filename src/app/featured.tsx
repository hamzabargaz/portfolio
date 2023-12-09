import { Badge } from "@/components";
import { Calendar, Layers, MapPin } from "lucide-react";
import React from "react";
import { getBlocks, getFeatured } from "../lib/notion";
import { format } from "date-fns";

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
  const data = await getBlocks(pageId);
  const projects = extractProjectData(data[0].children);

  if (!pageId || !projects) {
    return <div />;
  }

  return (
    <>
      <h3 className='mb-6'> Featured Projects</h3>
      <div className=' gap-4 flex flex-col max-h-72 overflow-auto pr-4'>
        {projects.map((item: any, i: number) => (
          <Project key={i} {...item} />
        ))}
      </div>
    </>
  );
}

type TProject = {
  name: string;
  description: string;
  icon?: React.ReactNode;
  start_date: string;
  end_date: string;
  tags: string;
  location: string;
};

const Project = ({
  name,
  description,
  icon: Icon,
  start_date,
  end_date,
  tags,
  location,
}: TProject) => {
  const formatDate = (date: string) =>
    date && format(new Date(date), "MMM yyyy");
  const list_tags = tags.split(",");
  return (
    <div className='flex flex-col gap-4 rounded-xl bg-light-100 dark:bg-dark-100 p-4'>
      <div className='flex items-start justify-between'>
        <div className='p-2 rounded-xl bg-light-200 dark:bg-dark-200'>
          {Icon ?? <Layers />}
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

function extractProjectData(jsonData: any) {
  const projects: any = [];

  jsonData.forEach((item: any) => {
    const cells = item.table_row.cells;

    const project = {
      name: cells[0][0].plain_text,
      start_date: cells[1][0].plain_text,
      end_date: cells[2][0].plain_text,
      description: cells[4][0].plain_text,
      location: cells[3][0].plain_text,
      tags: cells[5][0].plain_text,
    };
    projects.push(project);
  });

  return projects;
}
