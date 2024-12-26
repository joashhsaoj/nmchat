// "use client";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import { toast } from "@/hooks/use-toast";

// export default function Ad() {
//   return (
//     <div>
//       <AlertDialog>
//         <AlertDialogTrigger>Block</AlertDialogTrigger>
//         <AlertDialogContent>
//           <AlertDialogHeader>
//             <AlertDialogTitle>Sure to block?</AlertDialogTitle>
//             <AlertDialogDescription></AlertDialogDescription>
//           </AlertDialogHeader>
//           <AlertDialogFooter>
//             <AlertDialogCancel>Cancel</AlertDialogCancel>
//             <AlertDialogAction
//               onClick={() => {
//                 toast({
//                   description: "Successfully blocked.",
//                   duration: 2500,
//                 });
//               }}
//             >
//               Continue
//             </AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>
//     </div>
//   );
// }
