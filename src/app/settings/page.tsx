import { config } from "@/lib/config";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SettingsPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>Deployment information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Environment</span>
            <Badge variant="secondary">{config.environment}</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Commit</span>
            <code className="text-sm text-muted-foreground">
              {config.commitSha}
            </code>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
