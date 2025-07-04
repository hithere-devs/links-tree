import riLogo from '@/app/ri.png';
import oia from '@/app/oia.png';
import jv from '@/app/jv.png';
import caresy from '@/app/caresy.png';
import sad from '@/app/sad.png';
import { Company } from '@/types';

export const companies: Company[] = [
    {
        name: 'Reachinbox.ai',
        role: 'Associate Backend Developer',
        logo: riLogo,
        slug: 'associate-backend-developer-reachinbox-ai',
    },
    {
        name: 'Openinapp',
        role: 'Junior Backend Developer',
        logo: oia,
        slug: 'junior-backend-developer-openinapp',
    },
    {
        name: 'JarvIoT',
        role: 'Software Developer Intern (Frontend)',
        logo: jv,
        slug: 'software-developer-intern-(frontend)-jarviot',
    },
    {
        name: 'Caresy',
        role: 'Software Developer Intern (Backend)',
        logo: caresy,
        slug: 'software-developer-intern-(backend)-caresy',
    },
    {
        name: 'Saddweb',
        role: 'Freelancing',
        logo: sad,
        slug: 'freelancing-saddweb',
    },
];

export const getCompanyBySlug = (slug: string): Company | undefined => {
    return companies.find(company => company.slug === slug);
};
