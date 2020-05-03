function pdf(path, id) {
    var options = {
        pdfOpenParams: { view: 'FitH'}
    };

    PDFObject.embed(path, id, options);
}