import { OnInit, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as ɵngcc0 from '@angular/core';
export declare class S3searchComponent implements OnInit {
    private formBuilder;
    private http;
    constructor(formBuilder: FormBuilder, http: HttpClient);
    displayedColumns: string[];
    dataSource: string[];
    requestResultChange: EventEmitter<any>;
    requestResult: string;
    startKey: string;
    keyStartIndex: number;
    s3searchForm: import("@angular/forms").FormGroup;
    ngOnInit(): void;
    onSubmit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<S3searchComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<S3searchComponent, "lib-s3search", never, {}, {
    "requestResultChange": "requestResultChange";
}, never>;
}

//# sourceMappingURL=s3search.component.d.ts.map