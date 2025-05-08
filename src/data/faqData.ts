
import { FAQCategory } from '@/types/faq';
import { generalFAQs } from './faq/common';
import { installationFAQs } from './faq/installation';
import { usageFAQs } from './faq/usage';
import { supportFAQs } from './faq/support';
import { purchaseFAQs } from './faq/purchase';
import { operatorsFAQs } from './faq/operators';
import { securityFAQs } from './faq/security';

// Объединяем все категории FAQ в один массив
export const faqCategories: FAQCategory[] = [
  generalFAQs,
  installationFAQs,
  usageFAQs,
  supportFAQs,
  purchaseFAQs,
  operatorsFAQs,
  securityFAQs
];
