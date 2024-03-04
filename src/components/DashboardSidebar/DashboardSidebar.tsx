import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Archive, Car, LogOut, Plus } from "lucide-react";

export default function DashboardSidebar() {
  return (
    <div className="border-r-2 w-1/5 h-screen">
      <div className="flex justify-between mb-8">
        <p>John Doe</p>

        <LogOut />
      </div>

      <div className="flex gap-4">
        <h3 className="text-3xl font-semibold mb-8">Dashboard</h3>
        <Button variant="outline" size="icon">
          <Plus />
        </Button>
      </div>

      <Button variant="ghost" className="px-6">
        <Car className="mr-3" />
        <p className="mr-16 font-semibold ">All Cars</p>
        <Badge>16</Badge>
      </Button>

      <Button variant="ghost" className="px-6">
        <Archive className="mr-3" />
        <p className="mr-16 font-semibold">Archive</p>
        <Badge>4</Badge>
      </Button>
    </div>
  );
}
