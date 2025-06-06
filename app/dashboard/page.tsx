import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, MessageSquare, Search } from "lucide-react"
import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"
// import { ApiKeyWarning } from "@/components/api-key-warning"
// import { isGoogleApiKeyAvailable } from "@/lib/google-ai"
// import { isOpenAIApiKeyAvailable } from "@/lib/openai-ai"

export default function DashboardPage() {
  // Server-side check for environment variables
//   const isGoogleValid = isGoogleApiKeyAvailable()
//   const isOpenAIValid = isOpenAIApiKeyAvailable()
//   const isValid = isGoogleValid && isOpenAIValid

  return (
    <DashboardLayout>
        {/* <ApiKeyWarning isValid={isValid} /> */}

      <div className="container grid gap-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Queries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-muted-foreground">+5.4% from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Average Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4s</div>
              <p className="text-xs text-muted-foreground">-0.3s from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Sources Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">342</div>
              <p className="text-xs text-muted-foreground">+12% from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">+2 from last week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your recent AI interactions and queries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-lg border p-3">
                  <MessageSquare className="h-5 w-5 text-muted-foreground" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">What is the latest news about AI?</p>
                    <p className="text-xs text-muted-foreground">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border p-3">
                  <MessageSquare className="h-5 w-5 text-muted-foreground" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">How does quantum computing work?</p>
                    <p className="text-xs text-muted-foreground">1 hour ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border p-3">
                  <MessageSquare className="h-5 w-5 text-muted-foreground" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">What are the best practices for React?</p>
                    <p className="text-xs text-muted-foreground">3 hours ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button asChild className="w-full justify-start" size="lg">
                  <Link href="/dashboard/ask">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Ask AI
                  </Link>
                </Button>
                <Button asChild className="w-full justify-start" size="lg" variant="outline">
                  <Link href="/dashboard/search">
                    <Search className="mr-2 h-5 w-5" />
                    Search
                  </Link>
                </Button>
                <Button asChild className="w-full justify-start" size="lg" variant="outline">
                  <Link href="/dashboard/analytics">
                    <BarChart3 className="mr-2 h-5 w-5" />
                    View Analytics
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
