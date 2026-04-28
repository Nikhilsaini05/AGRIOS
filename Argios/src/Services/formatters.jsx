export function FormatPathName(pathname){
    if(!pathname) return "Invalid Syntax";

    const pathlist = pathname.split("/");

    const targetPath = pathlist[pathlist.length-1];
    const formattedText = targetPath.split("-").join(" ");

    return formattedText.toUpperCase();
} 