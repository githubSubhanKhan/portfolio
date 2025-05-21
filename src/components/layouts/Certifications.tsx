import { useState } from 'react';
import { ArrowLeft, Folder, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Define the structure for certifications
interface Certification {
    id: string;
    name: string;
    thumbnail: string;
    fullImage: string;
}

interface CertificationCategory {
    id: string;
    name: string;
    certifications: Certification[];
}

// Sample data - replace with your actual certifications
const certificationCategories: CertificationCategory[] = [
    {
        id: 'programming-language',
        name: 'Programming Language',
        certifications: [
            {
                id: 'programming-lang-1',
                name: 'C For Everyone',
                thumbnail: '/certificates/C Language.jpg',
                fullImage: '/certificates/C Language.jpg',
            },
            {
                id: 'programming-lang-2',
                name: 'C++ Programming',
                thumbnail: '/certificates/C++.jpg',
                fullImage: '/certificates/C++.jpg',
            },
            {
                id: 'programming-lang-3',
                name: 'Introduction to SQL',
                thumbnail: '/certificates/SQL.jpg',
                fullImage: '/certificates/SQL.jpg',
            },
        ],
    },
    {
        id: 'speed-debugging',
        name: 'Speed Debugging',
        certifications: [
            {
                id: 'sd-1',
                name: "ProBattle IBA",
                thumbnail: '/certificates/Pro Battle IBA.png',
                fullImage: '/certificates/Pro Battle IBA.png',
            },
            {
                id: 'sd-2',
                name: 'Fix Fast',
                thumbnail: '/certificates/Fix Fast.jpg',
                fullImage: '/certificates/Fix Fast.jpg',
            },
        ],
    },
    {
        id: 'data-science',
        name: 'Data Science',
        certifications: [
            {
                id: 'data-1',
                name: 'Understanding Data Science',
                thumbnail: '/certificates/Understanding Data Sceince Datacamp.jpg',
                fullImage: '/certificates/Understanding Data Sceince Datacamp.jpg',
            },
            {
                id: 'data-2',
                name: 'Exploratory Data Analysis in Python',
                thumbnail: '/certificates/Expolatory Data Analysis in Python.jpg',
                fullImage: '/certificates/Expolatory Data Analysis in Python.jpg',
            },
        ],
    },
    {
        id: 'speed-programming',
        name: 'Speed Programming',
        certifications: [
            {
                id: 'sp-1',
                name: 'Speed Programming at NED University',
                thumbnail: '/certificates/NED Speed Programming.jpg',
                fullImage: '/certificates/NED Speed Programming.jpg',
            }
        ],
    },
    {
        id: 'hackathon',
        name: 'Hackathon',
        certifications: [
            {
                id: 'hk-1',
                name: 'GPT4o: Code & Conquer Hackathon',
                thumbnail: '/certificates/gpt 4o.jpg',
                fullImage: '/certificates/gpt 4o.jpg',
            }
        ],
    }
];

export default function Certifications() {
    const [currentView, setCurrentView] = useState<'home' | string>('home');
    const [selectedCategory, setSelectedCategory] = useState<CertificationCategory | null>(null);

    // Handle folder click
    const handleFolderClick = (category: CertificationCategory) => {
        setCurrentView('folder');
        setSelectedCategory(category);
    };

    // Handle back button click
    const handleBackClick = () => {
        setCurrentView('home');
        setSelectedCategory(null);
    };

    // Handle certificate click - open in new tab
    const handleCertificateClick = (cert: Certification) => {
        window.open(cert.fullImage, '_blank');
    };

    return (
        <section id="certifications" className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-primary">Certifications</h2>

                {/* Browser window mockup */}
                <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-4xl mx-auto dark:bg-gray-800 dark:border dark:border-gray-700">
                    {/* Browser toolbar */}
                    <div className="bg-bluecustom px-4 py-2 flex items-center border-b dark:bg-gray-900 dark:border-gray-700">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 mx-4">
                            <div className="h-6 bg-white rounded-md w-full flex items-center justify-center text-xs text-black dark:bg-gray-800 dark:text-gray-400">
                                {currentView === 'home'
                                    ? 'file:///certifications/'
                                    : `file:///certifications/${selectedCategory?.id}/`}
                            </div>
                        </div>
                    </div>

                    {/* Window content */}
                    <div className="p-6 min-h-96 bg-bluecustom dark:bg-gray-800">
                        {currentView === 'home' ? (
                            // Folders view
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                                {certificationCategories.map((category) => (
                                    <TooltipProvider key={category.id}>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Card
                                                    className="flex flex-col items-center cursor-pointer hover:bg-gray-100 transition-colors dark:hover:bg-gray-700 border-0 shadow-md"
                                                    onClick={() => handleFolderClick(category)}
                                                >
                                                    <CardContent className="pt-6 pb-2 flex flex-col items-center">
                                                        <div className="relative">
                                                            <Folder className="w-16 h-16 text-primary" />
                                                            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-xs text-center font-medium text-gray-700 dark:text-gray-300">
                                                                {category.certifications.length}
                                                            </span>
                                                        </div>
                                                        <span className="mt-3 text-center text-sm font-medium text-gray-800 dark:text-gray-200">{category.name}</span>
                                                    </CardContent>
                                                </Card>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Click to open {category.name} folder</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                ))}
                            </div>
                        ) : (
                            // Certificate files view
                            <div>
                                <Button
                                    onClick={handleBackClick}
                                    size="sm"
                                    className="mb-6 gap-1 hover:bg-transparent hover:text-black hover:scale-105 transition-all duration-300"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to folders
                                </Button>

                                <h3 className="text-xl font-semibold mb-4 dark:text-gray-100">{selectedCategory?.name}</h3>

                                <div className="overflow-x-auto">
                                    <div className="flex gap-6 w-max">
                                        {selectedCategory?.certifications.map((cert) => (
                                            <Card
                                                key={cert.id}
                                                className="min-w-[280px] max-w-[280px] overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                                                onClick={() => handleCertificateClick(cert)}
                                            >
                                                <div className="relative h-40 w-full">
                                                    <img
                                                        src={cert.thumbnail}
                                                        alt={`${cert.name} certificate thumbnail`}
                                                        className="absolute inset-0 w-full h-full object-cover"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <CardFooter className="p-3 flex justify-between items-center">
                                                    <div>
                                                        <CardTitle className="text-sm font-medium">{cert.name}</CardTitle>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">View certificate</p>
                                                    </div>
                                                    <ExternalLink className="w-4 h-4 text-gray-400" />
                                                </CardFooter>
                                            </Card>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>

                    {/* Status bar */}
                    <div className="bg-bluecustom px-4 py-1 border-t flex justify-between text-xs text-black dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400">
                        <span>{currentView === 'home'
                            ? `${certificationCategories.length} folders`
                            : `${selectedCategory?.certifications.length || 0} certificates`}
                        </span>
                        <span>{new Date().toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}