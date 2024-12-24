export function formatPostedDate(dateString: string): string {
    const postedDate = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - postedDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
    if (diffDays === 1) return "1 day ago";
    return `${diffDays} days ago`;
  }
  
  