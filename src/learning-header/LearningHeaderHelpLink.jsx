import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import messages from './messages';

const LearningHeaderHelpLink = () => {
  const intl = useIntl();
  return (
    <a className="text-gray-700 ml-2" href={`${getConfig().LMS_BASE_URL}/contact`}>{intl.formatMessage(messages.help)}</a>
  );
};

export default LearningHeaderHelpLink;
