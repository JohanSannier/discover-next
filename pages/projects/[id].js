import Image from "next/image";
import React from "react";
import { projects } from "../../projectsData";
import { path } from "../../config";
import Link from "next/link";

const project = ({ project }) => {
  return (
    <div className="project">
      <h1>{project.title}</h1>
      <span>{project.date}</span>
      <p>{project.info}</p>
      <Image
        src={path + project.img}
        alt={project.title}
        width={400}
        height={400}
      />
      <Link href="/portfolio">
        <a>Revenir au projet</a>
      </Link>
    </div>
  );
};

export default project;

export const getStaticProps = (context) => {
  const filtered = projects.filter(
    (project) => project.id == context.params.id
  );
  if (filtered.length > 0) {
    return {
      props: { project: filtered[0] },
    };
  }
};

export const getStaticPaths = () => {
  //   préparer les id dans un objet path {id:1, id:2}
  const ids = projects.map((project) => project.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};
