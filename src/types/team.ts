export interface TeamModel {
    id: string;
    name: string;
    logo: string;
    summary: string;
    overview: Overview;
    members: Member[];
    projects: Project[];
    techStack: TechStack;
    responsibilities: Responsibilities;
}

export interface Overview {
    description: string;
    mission: string;
    orgFit: string;
    stakeholders?: string[];
}

export interface Member {
    id: string;
    name: string;
    role: string;
    experience: string;
    specialization: string;
    email: string;
}

export interface Project {
    id: string;
    name: string;
    status: string;
    techUsed: string[];
    description?: string;
}

export interface TechStack {
    languages: string[];
    frameworks: string[];
    tools: string[];
    platforms: string[];
}

export interface Responsibilities {
    owns: string[];
    doesNotOwn: string[];
}