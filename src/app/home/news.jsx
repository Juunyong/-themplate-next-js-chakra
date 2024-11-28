import { Section } from '@/components/layout/Main';
import { AspectRatio, Container, SimpleGrid } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { mockNews } from '@/data/newsData';

const News = () => {
    return (
        <Section title="뉴스">
            <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
                {mockNews.map((news, index) => (
                    <li key={index}>
                        <AspectRatio ratio={2 / 1}>
                            <Image
                                src={news.imageUrl}
                                alt={news.title}
                                width={800}
                                height={500}
                                className="w-full h-50 rounded-lg mb-4"
                            />
                        </AspectRatio>
                        <strong className="block text-lg font-semibold mt-5">{news.title}</strong>
                        <p className="mt-1">{news.content}</p>
                        <span className="text-sm text-gray-400">{news.date}</span>
                    </li>
                ))}
            </ul>
            <SimpleGrid as="ul" columns={[1, null, 2, 3, 4]} gap="40px">
                {mockNews.map((news, index) => (
                    <li key={index}>
                        <AspectRatio ratio={2 / 1}>
                            <Image
                                src={news.imageUrl}
                                alt={news.title}
                                width={800}
                                height={500}
                                className="w-full h-50 rounded-lg mb-4"
                            />
                        </AspectRatio>
                        <strong className="block text-lg font-semibold mt-5">{news.title}</strong>
                        <p className="mt-1">{news.content}</p>
                        <span className="text-sm text-gray-400">{news.date}</span>
                    </li>
                ))}
            </SimpleGrid>
        </Section>
    );
};

export default News;
