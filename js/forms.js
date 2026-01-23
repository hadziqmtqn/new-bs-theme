/**
 * Form Management JavaScript
 * Handles initialization of plugins and form validation
 */

$(document).ready(function () {

    /* ===================================================================
       1. INITIALIZE SELECT2
       =================================================================== */

    // Basic Select2
    $('#basicSelect2').select2({
        theme: 'bootstrap-5',
        placeholder: 'Pilih kota...',
        allowClear: true,
        width: '100%'
    });

    // Multi Select2
    $('#multiSelect2').select2({
        theme: 'bootstrap-5',
        placeholder: 'Pilih bahasa pemrograman...',
        closeOnSelect: false,
        width: '100%'
    });

    // Tags Select2 (Create new options)
    $('#selectWithTags').select2({
        theme: 'bootstrap-5',
        placeholder: 'Pilih atau buat tag baru...',
        tags: true,
        tokenSeparators: [',', ' '],
        width: '100%'
    });

    // Validation Select2
    $('#validationSelect').select2({
        theme: 'bootstrap-5',
        placeholder: 'Pilih kota...',
        width: '100%'
    });

    // Fix validation style for Select2
    $('#validationSelect').on('change', function () {
        $(this).trigger('blur');
    });


    /* ===================================================================
       2. INITIALIZE BOOTSTRAP DATETIMEPICKER
       =================================================================== */

    // Basic Datepicker
    $('.datepicker').datepicker({
        format: 'dd/mm/yyyy',
        language: 'id',
        autoclose: true,
        todayHighlight: true,
        orientation: 'bottom auto'
    });

    // Range Datepicker
    $('.input-group.date').datepicker({
        format: 'dd/mm/yyyy',
        language: 'id',
        autoclose: true,
        todayHighlight: true,
        inputs: $('.datepicker-range')
    });


    /* ===================================================================
       3. INITIALIZE TEMPUS DOMINUS (DateTime Picker)
       =================================================================== */

    // DateTime Picker
    const datetimepicker = document.getElementById('datetimepicker');
    if (datetimepicker) {
        new tempusDominus.TempusDominus(datetimepicker, {
            display: {
                components: {
                    calendar: true,
                    date: true,
                    month: true,
                    year: true,
                    decades: true,
                    clock: true,
                    hours: true,
                    minutes: true,
                    seconds: false
                },
                theme: 'light' // or 'auto'
            },
            localization: {
                format: 'dd/MM/yyyy HH:mm',
            }
        });
    }

    // Time Picker Only
    const timepicker = document.getElementById('timepicker');
    if (timepicker) {
        new tempusDominus.TempusDominus(timepicker, {
            display: {
                components: {
                    calendar: false,
                    date: false,
                    month: false,
                    year: false,
                    decades: false,
                    clock: true,
                    hours: true,
                    minutes: true,
                    seconds: false
                }
            },
            localization: {
                format: 'HH:mm',
            }
        });
    }


    /* ===================================================================
       4. FORM COMPONENTS INTERACTION
       =================================================================== */

    // Range Slider
    $('#rangeInput').on('input', function () {
        $('#rangeValue').text($(this).val());
    });

    // Password Toggle
    $('#togglePasswordBasic').click(function () {
        const passwordInput = $('#passwordInput');
        // 'this' is now the icon itself

        if (passwordInput.attr('type') === 'password') {
            passwordInput.attr('type', 'text');
            $(this).removeClass('bi-eye-slash').addClass('bi-eye');
        } else {
            passwordInput.attr('type', 'password');
            $(this).removeClass('bi-eye').addClass('bi-eye-slash');
        }
    });

    // Color Picker Sync
    $('#colorInput').on('input', function () {
        $('#colorInputText').val($(this).val());
    });


    /* ===================================================================
       5. FILE UPLOAD PREVIEW
       =================================================================== */

    $('#imageUpload').change(function () {
        const file = this.files[0];
        const previewContainer = $('#imagePreview');

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                previewContainer.html('<img src="' + e.target.result + '" alt="Preview" class="img-fluid">');
                previewContainer.addClass('has-image');
            }

            reader.readAsDataURL(file);
        } else {
            previewContainer.html('');
            previewContainer.removeClass('has-image');
        }
    });


    /* ===================================================================
       6. FORM VALIDATION
       =================================================================== */

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                // Form is valid
                event.preventDefault(); // Prevent actual submission for demo
                alert('Form valid! Data siap dikirim.');
            }

            form.classList.add('was-validated');
        }, false);
    });

});
