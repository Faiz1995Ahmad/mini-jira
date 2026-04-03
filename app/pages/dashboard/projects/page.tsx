import ProjectsContent from "@/app/Components/Projects/ProjectsContent"
import ProjectsHeader from "@/app/Components/Projects/ProjectsHeader"



export default function ProjectsPage() {
    return (
        <div className="dark:bg-gray-300 p-4 h-full rounded-lg flex flex-col items-center gap-8">
            <ProjectsHeader />
            <ProjectsContent />
        </div>
    )
}