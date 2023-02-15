import axios from 'axios';
import { useState } from 'react';
const validFileTypes = ['image/png', 'image/jpeg', 'image/jpg'];

export const ImageUpload: React.FC = () => {
	const [error, setError] = useState<string>('');
	const [file, setFile] = useState<File | null>(null);

	const handleUpload = (e: any) => {
		const file = e.target.files[0];
		setFile(file);

		if (file && !validFileTypes.includes(file.type)) {
			setError('Please select a valid file type (png or jpg)');
			return;
		}
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		console.log('sending image to server...');

		const formData = new FormData();
		formData.append('image', file!);

		const config = {
			headers: {
				'content-type': 'multipart/form-data',
			},
		};

		await axios
			.post('http://localhost:3000/api/v1/upload', formData, config)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
	};

	return (
		<form onSubmit={handleSubmit} id="upload-form">
			<input
				className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
				id="image-input"
				type="file"
				onChange={handleUpload}
			></input>
			<button
				type="submit"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4"
			>
				Submit
			</button>
			{error && <p className="text-red-500">{error}</p>}
		</form>
	);
};
