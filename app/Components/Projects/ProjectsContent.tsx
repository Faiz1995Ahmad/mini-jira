
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function ProjectsContent() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead >Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Manager</TableHead>
                    <TableHead className="text-right"></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">
                        <button className="bg-blue-500 p-2 cursor-pointer rounded-md hover:bg-blue-300">Teams</button>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">
                        <button className="bg-blue-500 p-2 cursor-pointer rounded-md hover:bg-blue-300">Teams</button>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">
                        <button className="bg-blue-500 p-2 cursor-pointer rounded-md hover:bg-blue-300">Teams</button>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">
                        <button className="bg-blue-500 p-2 cursor-pointer rounded-md hover:bg-blue-300">Teams</button>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">
                        <button className="bg-blue-500 p-2 cursor-pointer rounded-md hover:bg-blue-300">Teams</button>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">
                        <button className="bg-blue-500 p-2 cursor-pointer rounded-md hover:bg-blue-300">Teams</button>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">
                        <button className="bg-blue-500 p-2 cursor-pointer rounded-md hover:bg-blue-300">Teams</button>
                    </TableCell>
                </TableRow>

            </TableBody>
        </Table>
    )
}