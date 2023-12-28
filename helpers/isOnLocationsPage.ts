import { usePathname } from "next/navigation";

export const isOnLocationsPage = (): boolean => {
  const router = usePathname();
  if (router === '/locations') {
    return true;
  }
  return false;
};

export const NavigatePanelClass = (url: string): string => {
  if (url.includes('/locations')) {
    return 'Locations';
  } else if (url.includes('/character')) {
    return 'Characters';
  } else if (url.includes('/episodes')) {
    return 'Episodes';
  } else {
    return 'Characters'
  }
};
