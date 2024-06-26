import { TCreateProject } from './types';

import { getServerSession } from '@/lib/auth';
import prisma from '@/lib/prisma';

export const createProject = async (newProject: TCreateProject) => {
  const session = await getServerSession();
  if (!session) return null;

  const project = await prisma.project.create({
    data: {
      name: newProject.name,
      description: newProject.description,
      website_url: newProject.website_url,
      image_url:
        newProject.image_url ||
        `https://api.dicebear.com/8.x/shapes/svg?seed=${newProject.name}`,
      github_url: newProject.github_url,
      members: {
        create: [
          {
            role: 'OWNER',
            user: {
              connect: {
                id: session.user.id,
              },
            },
          },
        ],
      },
      columns: {
        create: [
          {
            title: 'Backlog',
            order: 1,
            headingColor: 'text-neutral-400 dark:text-neutral-200',
          },
          {
            title: 'TODO',
            order: 2,
            headingColor: 'text-yellow-400 dark:text-yellow-200',
          },
          {
            title: 'In progress',
            order: 3,
            headingColor: 'text-blue-400 dark:text-blue-200',
          },
          {
            title: 'Complete',
            order: 4,
            headingColor: 'text-emerald-400 dark:text-emerald-200',
          },
        ],
      },
    },
  });

  return project;
};

export const getProjects = async () => {
  const session = await getServerSession();
  if (!session) return null;

  const projects = await prisma.project.findMany({
    where: {
      members: {
        some: {
          userId: session.user.id,
        },
      },
    },
  });

  return projects;
};

export const getSelectedProject = async () => {
  const session = await getServerSession();
  if (!session) return null;

  return session.user.selectProject;
};

export const getDetailProject = async (projectId: string) => {
  const session = await getServerSession();
  if (!session) return null;

  const project = await prisma.project.findFirst({
    where: {
      id: projectId,
      members: {
        some: {
          userId: session.user.id,
        },
      },
    },
  });

  return project;
};
