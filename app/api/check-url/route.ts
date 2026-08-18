import type {CheckURLResponse} from '@/lib/domain/types'

export async function POST(request: Request) {
	const formData = await request.formData()

	if (!formData.has('url')) {
		return Response.json({error: 'Missing URL.'}, {status: 400})
	}

	await new Promise((resolve) => setTimeout(resolve, 1000))

	const data: CheckURLResponse = {success: true, data: {missing: false, type: 'folder'}}
	//const data: CheckURLResponse = {success:false, message: "Failed to check URL."}

	return Response.json(data)
}
