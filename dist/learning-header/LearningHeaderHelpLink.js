import React from 'react';
import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import messages from './messages';
var LearningHeaderHelpLink = function LearningHeaderHelpLink() {
  var intl = useIntl();
  return /*#__PURE__*/React.createElement("a", {
    className: "text-gray-700 ml-2",
    href: "".concat(getConfig().LMS_BASE_URL, "/contact")
  }, intl.formatMessage(messages.help));
};
export default LearningHeaderHelpLink;
//# sourceMappingURL=LearningHeaderHelpLink.js.map