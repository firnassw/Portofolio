import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, User, PenTool, CheckCircle2, Diamond, ExternalLink } from 'lucide-react';
import { projectsItems } from '@/data/projects';

export async function generateStaticParams() {
  return projectsItems.map((project) => ({
    id: project.id,
  }));
}
export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projectsItems.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-on-surface)] pb-20">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8" style={{ marginTop: '-30px', paddingTop: 0 }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col pt-0">
            <Link href="/#showcase" className="inline-flex items-center font-medium mb-10 hover:opacity-80 transition-opacity w-max" style={{ color: '#4F46E5', marginTop: '-12px' }}>
              <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Projects
            </Link>

            <div className="inline-block px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase rounded-full w-max mb-6" style={{ backgroundColor: '#FFF0E5', color: '#E87B35' }}>
              {project.badge}
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight" style={{ color: 'var(--color-on-surface)' }}>
              {project.title}
            </h1>

            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--color-on-surface-variant)', marginBottom: '2rem' }}>
              {project.about}
            </p>
            <div className="grid grid-cols-2 gap-x-4 text-[14.5px]" style={{ marginBottom: '2rem', rowGap: '2.5rem' }}>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center font-bold" style={{ color: 'var(--color-on-surface)' }}>
                  <Calendar className="w-4 h-4 mr-2" style={{ color: 'var(--color-on-surface-variant)' }} /> Periode
                </div>
                <div className="ml-6" style={{ color: 'var(--color-on-surface-variant)' }}>{project.metadata.period}</div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center font-bold" style={{ color: 'var(--color-on-surface)' }}>
                  <User className="w-4 h-4 mr-2" style={{ color: 'var(--color-on-surface-variant)' }} /> Peran
                </div>
                <div className="ml-6" style={{ color: 'var(--color-on-surface-variant)' }}>{project.metadata.role}</div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center font-bold" style={{ color: 'var(--color-on-surface)' }}>
                  <Diamond className="w-4 h-4 mr-2" style={{ color: 'var(--color-on-surface-variant)' }} /> Tools
                </div>
                <div className="ml-6" style={{ color: 'var(--color-on-surface-variant)' }}>{project.metadata.tools}</div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center font-bold" style={{ color: 'var(--color-on-surface)' }}>
                  <CheckCircle2 className="w-4 h-4 mr-2" style={{ color: '#10B981' }} /> Status
                </div>
                <div className="ml-6" style={{ color: 'var(--color-on-surface-variant)' }}>{project.metadata.status}</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--color-on-surface)', marginBottom: '1.5rem' }}>Fitur Utama</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-[20px] h-[20px] mr-3 flex-shrink-0 mt-0.5" style={{ color: '#4F46E5' }} />
                    <span className="leading-relaxed" style={{ color: 'var(--color-on-surface-variant)' }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col pt-0">
            <div className="relative w-full rounded-[24px] overflow-hidden shadow-sm border border-gray-200/50 dark:border-gray-800 mb-6 bg-[#0B0F19] aspect-video">
              <img 
                src={project.image} 
                alt={`${project.title} Preview`}
                className="w-full h-full object-contain"
              />
              
              {project.prototypeUrl && (
                <div className="absolute bottom-5 right-5">
                  <a 
                    href={project.prototypeUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center px-5 py-3 bg-[#4F46E5] hover:bg-[#4338ca] text-white rounded-[14px] transition-all font-semibold text-[13px] shadow-xl"
                  >
                    {project.badge === 'WEB PROJECT' ? 'Lihat Kode' : 'Lihat Prototype di Figma'} <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
              <div className="bg-white dark:bg-[#18181B] rounded-[24px] p-7 shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-800 flex flex-col justify-start sm:row-span-2 h-full">
                <h3 className="text-[16px] font-bold" style={{ color: 'var(--color-on-surface)', marginBottom: '24px' }}>Tech Stack</h3>
                <div className="flex flex-wrap gap-3.5">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 text-[13px] font-semibold rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100/50 shadow-[0_2px_8px_rgba(79,70,229,0.06)] dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20 hover:bg-indigo-100 hover:border-indigo-200 dark:hover:bg-indigo-500/20 dark:hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(79,70,229,0.15)] cursor-default flex items-center justify-center"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-[#18181B] rounded-[24px] p-7 shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-800">
                <h3 className="text-[16px] font-bold mb-2.5" style={{ color: 'var(--color-on-surface)' }}>Tantangan</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: 'var(--color-on-surface-variant)' }}>
                  {project.challenge}
                </p>
              </div>

              <div className="bg-white dark:bg-[#18181B] rounded-[24px] p-7 shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-800">
                <h3 className="text-[16px] font-bold mb-2.5" style={{ color: 'var(--color-on-surface)' }}>Solusi</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: 'var(--color-on-surface-variant)' }}>
                  {project.solution}
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
