"use client";

import { ChevronRight } from "lucide-react";
import moment from "moment";

interface ArticleCardProps {
	title: string;
	publishDate: string;
	description: string;
	href: string;
}

export function ArticleCard({ title, publishDate, description, href }: ArticleCardProps) {
	return (
		<article className="group relative flex flex-col items-start">
			<h2 className="text-base font-semibold tracking-tight">
				<div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
				<a href={href}>
					<span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
					<span className="relative z-10">{title}</span>
				</a>
			</h2>
			<time
				className="relative z-10 order-first mb-3 flex items-center text-sm pl-3.5"
				dateTime={publishDate}
			>
				<span
					className="absolute inset-y-0 left-0 flex items-center"
					aria-hidden="true"
				>
					<span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
				</span>
				{moment(publishDate, "YYYY-MM-DD").format("LL")}
			</time>
			<p className="relative z-10 mt-2 text-sm">
				{description}
			</p>
			<div
				aria-hidden="true"
				className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
			>
				Read article <ChevronRight className="ml-1 h-3 w-3 " strokeWidth={3} />
			</div>
		</article>
	);
}
