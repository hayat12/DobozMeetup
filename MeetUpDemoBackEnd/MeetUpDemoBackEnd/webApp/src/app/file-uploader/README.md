# Angular 4 File Uploader

[Github](https://github.com/speti43/DobozMeetup/tree/master/MeetUpDemoBackEnd/MeetUpDemoBackEnd/webApp/src/app/file-uploader)

[Demo](https://github.com/speti43/DobozMeetup/blob/master/MeetUpDemoBackEnd/MeetUpDemoBackEnd/webApp/src/app/file-uploader/demo.png)

## Install
```
npm i ng4-file-upload@latest --save
```
## Usage

app.module.ts:
```
import { FileUploaderModule } from "ng4-file-upload/file-uploader.module";

...
imports: [
    ...
    FileUploaderModule
  ]

```

app.component.ts:
```

fileuploaderFileChange(files: FileList){

}

```

app.component.html:
```
<file-uploader [maxSizeInKb]="110" [allowMultiple]="False" [fileType]="'application/*'" 
(onSelection)="fileuploaderFileChange($event)"  [required]="false"></file-uploader>
```
