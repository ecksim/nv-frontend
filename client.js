import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "hxf7pr1f",
    dataset: "production",
    apiVersion: "2022-11-13",
    useCdn: false
});