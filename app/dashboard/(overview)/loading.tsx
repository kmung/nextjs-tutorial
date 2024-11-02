// loading.tsx is a special Next.js file built on top of Suspense, it allows you to create fallback UI to show as a replacement while page content loads.
// static ui components are shown while the page is loading
// The user doesn't have to wait for the page to finish loading before navigating away (this is called interruptable navigation).

import DashboardSkeleton from "@/app/ui/skeletons";

export default function Loading() {
    return (
        <DashboardSkeleton />
    );
}