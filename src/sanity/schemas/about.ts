import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'about',
    title: 'About Us',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            initialValue: 'La Nostra Storia',
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'storyTitle',
            title: 'Story Title',
            type: 'string',
        }),
        defineField({
            name: 'storyText',
            title: 'Story Text',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        defineField({
            name: 'storyImage',
            title: 'Story Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'values',
            title: 'Our Values',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Value Title' },
                        { name: 'description', type: 'text', title: 'Description' },
                        { name: 'icon', type: 'string', title: 'Icon (Initial Letter)', description: 'Single letter to display as icon' },
                    ],
                },
            ],
        }),
    ],
})
