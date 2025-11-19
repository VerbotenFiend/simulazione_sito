import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Site Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Site Description (SEO)',
            type: 'text',
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image (Homepage)',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'heroText',
            title: 'Hero Text',
            type: 'string',
        }),
        defineField({
            name: 'phoneNumber',
            title: 'Phone Number',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'text',
        }),
        defineField({
            name: 'openingHours',
            title: 'Opening Hours',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'List of opening hours (e.g., "Mon-Fri: 9am-6pm")',
        }),
        defineField({
            name: 'primaryColor',
            title: 'Primary Color',
            type: 'color',
            description: 'Pick the primary color for the website',
            options: {
                disableAlpha: true,
            }
        }),
        defineField({
            name: 'googleMapsEmbedUrl',
            title: 'Google Maps Embed URL',
            type: 'text',
            description: 'IMPORTANT: Go to Google Maps -> Share -> Embed a map -> Copy HTML. Then paste ONLY the URL inside the src="" attribute here. It should start with "https://www.google.com/maps/embed..."',
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'platform', type: 'string', title: 'Platform' },
                        { name: 'url', type: 'url', title: 'URL' },
                    ],
                },
            ],
        }),
    ],
})
