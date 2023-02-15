import { ImageUpload } from '@/components/ImageUpload';
import { useState } from 'react';


export default function Payment() {
	return (
		<section className=" dark:bg-gray-900 md:ml-64 h-screen">
			<div className="p-8 mx-auto max-w-2xl lg:py-16">
				<h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
					Uploade Your Slip
				</h2>
				<ImageUpload />
			</div>
			
		</section>
	);
}
