import React, { useMemo } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

// Define a type for the context module
type ContextModule = {
    keys(): string[];
    (id: string): string;
    <T>(id: string): T;
};

// Declare the context function to avoid TypeScript errors
declare const require: {
    context(
        directory: string,
        useSubdirectories: boolean,
        regExp: RegExp
    ): ContextModule;
};

const Example: React.FC = () => {
    // Dynamically import all modules that match a specific pattern from a directory
    const importAll = (r: ContextModule): string[] => r.keys().map((key) => r(key) as string);
    
    // Hold an array of imported image modules
    const allImages: string[] = importAll(require.context('../../public/images/', false, /\.(png|JPG|svg)$/));

    // Fisher-Yates shuffle algorithm
    const shuffleArray = (array: string[]): string[] => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    // Use useMemo to shuffle the array only once per render because shuffling is a computationally intensive operation
    const shuffledImages = useMemo(() => shuffleArray(allImages), [allImages]);

    return (
        <Slide autoplay={true} pauseOnHover={false}>
            {shuffledImages.map((image, index) => (
                <div key={index} className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${image})` }}>
                    </div>
                </div>
            ))}
        </Slide>
    );
};

export default Example;