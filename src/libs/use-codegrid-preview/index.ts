import { getPreviewHtml } from './getPreviewHtml';

export const useCodeGridPreview = () => {
  return {
    toPreviewHtml(articleHtml: string) {
      return getPreviewHtml(articleHtml);
    },
  };
};
