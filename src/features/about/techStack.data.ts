import type { Technology } from "@/types/technology";
import {
  HtmlIcon,
  CssIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NextJsIcon,
  TailwindIcon,
  GitBranchIcon,
  ApiIcon,
  ResponsiveIcon,
  ReactQueryIcon,
  UiUxIcon,
} from "@/components/ui/Icon";

/**
 * The technology/skills list requested for the About section's
 * showcase. "Git" and "Git / GitHub" were merged into a single entry
 * to avoid listing the same tool twice.
 */
export const TECH_STACK: Technology[] = [
  { id: "html", name: "HTML", icon: HtmlIcon },
  { id: "css", name: "CSS", icon: CssIcon },
  { id: "javascript", name: "JavaScript", icon: JavaScriptIcon },
  { id: "typescript", name: "TypeScript", icon: TypeScriptIcon },
  { id: "react", name: "React", icon: ReactIcon },
  { id: "nextjs", name: "Next.js", icon: NextJsIcon },
  { id: "tailwind", name: "Tailwind CSS", icon: TailwindIcon },
  { id: "git", name: "Git & GitHub", icon: GitBranchIcon },
  { id: "rest-api", name: "REST API", icon: ApiIcon },
  { id: "responsive", name: "Responsive Design", icon: ResponsiveIcon },
  { id: "react-query", name: "React Query", icon: ReactQueryIcon },
  { id: "ui-ux", name: "UI/UX Fundamentals", icon: UiUxIcon },
];
