import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"

type DialogDemoProps = {
	children: React.ReactNode
}

export function DialogCommon({ children }: DialogDemoProps) {
	return <Dialog>{children}</Dialog>
}
